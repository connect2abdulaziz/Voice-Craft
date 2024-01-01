import librosa
import soundfile as sf
import numpy as np
import matplotlib.pyplot as plt
import os
from gtts import gTTS
from transformers import WhisperProcessor, WhisperForConditionalGeneration
import torchaudio
import torch
import io

# Check if the model is already downloaded
try:
    processor = WhisperProcessor.from_pretrained("openai/whisper-large-v2")
    model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-large-v2")
    model.config.forced_decoder_ids = None
except:
    # Download and save the model if not already downloaded
    processor = WhisperProcessor.from_pretrained("openai/whisper-large-v2")
    model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-large-v2")
    model.config.forced_decoder_ids = None

    # Save the model to a local directory
    processor.save_pretrained("whisper_processor")
    model.save_pretrained("whisper_model")


# Create a folder if it doesn't exist
labels_output_folder = 'spec_labels'
if not os.path.exists(labels_output_folder):
    os.makedirs(labels_output_folder)


# Create a folder if it doesn't exist
exps_output_folder = 'spec_exps'
if not os.path.exists(exps_output_folder):
    os.makedirs(exps_output_folder)

def create_spectrograms(audio_file):

    # Load the model and processor from the local directory
    processor = WhisperProcessor.from_pretrained("whisper_processor")
    model = WhisperForConditionalGeneration.from_pretrained("whisper_model")
    model.config.forced_decoder_ids = None

    # Load audio file
    y, sr = librosa.load(audio_file)

    # Convert audio to spectrogram
    spec = np.abs(librosa.stft(y))
    # Save the spectrogram image in the 'spec_labels' folder
    audio_filename = os.path.join(labels_output_folder, os.path.basename(audio_file))
    output_file = os.path.splitext(audio_filename)[0] + ".npy"
    np.save(output_file, spec)

    audio_data, original_sampling_rate = torchaudio.load(audio_file)
    target_sampling_rate = 16000
    resampler = torchaudio.transforms.Resample(original_sampling_rate, target_sampling_rate)
    resampled_audio = resampler(audio_data)

    # Get the input features
    input_features = processor(resampled_audio[0].numpy(), sampling_rate=target_sampling_rate, return_tensors="pt").input_features

    # Generate token ids
    predicted_ids = model.generate(input_features)

    # Decode token ids to text
    transcription = processor.batch_decode(predicted_ids, skip_special_tokens=True)

    # Convert list to a single string
    transcription_string = " ".join(transcription)

    # Text to google voice
    # Text to be converted to audio
    text = transcription_string

    # Language for the audio (default is English, 'en')
    language = 'en'

    # Create a gTTS object
    tts = gTTS(text=text, lang=language, slow=False)

    # Save the audio to a BytesIO stream
    audio_stream = io.BytesIO()
    tts.write_to_fp(audio_stream)
    audio_stream.seek(0)  # Reset the stream position

    # Load the audio data from BytesIO
    y, sr = librosa.load(audio_stream, sr=None)

    # Convert the audio to a spectrogram
    spec = np.abs(librosa.stft(y))
    # Save the spectrogram image in the 'spec_labels' folder
    audio_filename = os.path.join(exps_output_folder, os.path.basename(audio_file))
    output_file = os.path.splitext(audio_filename)[0] + ".npy"
    print(output_file)
    np.save(output_file, spec)

# Main Program

input_folder = "waves"

# Iterate through each file in the input folder
for file in os.listdir(input_folder):
    audio_filename = os.path.join(input_folder, file)
    if os.path.isfile(audio_filename) and (audio_filename.endswith(".wav") or audio_filename.endswith(".mp3")):
        print("Path:", audio_filename)
        create_spectrograms(audio_filename)