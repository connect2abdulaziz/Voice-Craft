
#pip install torch
#pip install torchaudio
#pip install matplotlib
#pip install cffi
#pip install numpy
#pip install soundfile
#pip install deep-phonemizer


import IPython
import matplotlib
import matplotlib.pyplot as plt
import torch
import torchaudio


matplotlib.rcParams["figure.figsize"] = [16.0, 4.8]

torch.random.manual_seed(0)
device = "cuda" if torch.cuda.is_available() else "cpu"

# -----------------------------------------------------WAVERNN------------------------------------------------

bundle = torchaudio.pipelines.TACOTRON2_WAVERNN_PHONE_LJSPEECH
processor = bundle.get_text_processor()
tacotron2 = bundle.get_tacotron2().to(device)
vocoder = bundle.get_vocoder().to(device)

text = "My University name is Faculty of Computer Science and Information Technology"

with torch.inference_mode():
    processed, lengths = processor(text)
    print("processed: ", processed)
    processed = processed.to(device)
    print("processed: ", processed)
    lengths = lengths.to(device)
    spec, spec_lengths, _ = tacotron2.infer(processed, lengths)
    waveforms, lengths = vocoder(spec, spec_lengths)

# Save the audio as a WAV file in the same directory
output_path = "output_audio.wav"
torchaudio.save(output_path, waveforms[0:1].cpu(), vocoder.sample_rate)

fig, [ax1, ax2] = plt.subplots(2, 1, figsize=(16, 9))
ax1.imshow(spec[0].cpu().detach(), origin="lower", aspect="auto")
ax2.plot(waveforms[0].cpu().detach())
plt.show()
IPython.display.Audio(waveforms[0:1].cpu(), rate=vocoder.sample_rate)


# ----------------------------------------GRIFFINLIM_PHONE---------------------------------------------

# bundle = torchaudio.pipelines.TACOTRON2_GRIFFINLIM_PHONE_LJSPEECH
# processor = bundle.get_text_processor()
# tacotron2 = bundle.get_tacotron2().to(device)
# vocoder = bundle.get_vocoder().to(device)
# text = "Hello world! Text to speech!"
# with torch.inference_mode():
#     processed, lengths = processor(text)
#     processed = processed.to(device)
#     lengths = lengths.to(device)
#     spec, spec_lengths, _ = tacotron2.infer(processed, lengths)
# waveforms, lengths = vocoder(spec, spec_lengths)

# # Save the audio as a WAV file in the directory
# output_path = "C:\FYP\myenv\outputs\output_audio.wav"
# torchaudio.save(output_path, waveforms[0:1].cpu(), vocoder.sample_rate)

# fig, [ax1, ax2] = plt.subplots(2, 1, figsize=(16, 9))
# ax1.imshow(spec[0].cpu().detach(), origin="lower", aspect="auto")
# ax2.plot(waveforms[0].cpu().detach())
# IPython.display.Audio(waveforms[0:1].cpu(), rate=vocoder.sample_rate)