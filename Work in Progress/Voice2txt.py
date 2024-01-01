#pip install transformers
#pip install datasets
#pip install torch
#pip install torchaudio

from transformers import WhisperProcessor, WhisperForConditionalGeneration
import torchaudio
import torch

# Initialize the Whisper processor and model
processor = WhisperProcessor.from_pretrained("openai/whisper-large-v2")
model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-large-v2")
model.config.forced_decoder_ids = None

# Path to your audio or video file
file_path = "output_audio.wav"

# Load the audio file and resample it to 16,000 Hz
audio_data, original_sampling_rate = torchaudio.load(file_path)
target_sampling_rate = 16000
resampler = torchaudio.transforms.Resample(original_sampling_rate, target_sampling_rate)
resampled_audio = resampler(audio_data)

# Get the input features
input_features = processor(resampled_audio[0].numpy(), sampling_rate=target_sampling_rate, return_tensors="pt").input_features

# Generate token ids
predicted_ids = model.generate(input_features)

# Decode token ids to text
transcription = processor.batch_decode(predicted_ids, skip_special_tokens=True)

# Save transcription as TXT
with open("transcription.txt", "w", encoding="utf-8") as txt_file:
    txt_file.write('\n'.join(transcription))

# Save transcription as SRT
with open("transcription.srt", "w", encoding="utf-8") as srt_file:
    for i, text in enumerate(transcription, start=1):
        srt_file.write(f"{i}\n")
        srt_file.write("00:00:00,000 --> 00:00:01,000\n")  # You can adjust the timing as needed
        srt_file.write(f"{text}\n\n")

print(transcription)