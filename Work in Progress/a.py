import os
from pydub import AudioSegment
import speech_recognition as sr

def convert_to_wav(mp3_file, wav_file):
    sound = AudioSegment.from_mp3(mp3_file)
    sound.export(wav_file, format="wav")

def transcribe_audio(audio_file):
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file) as source:
        audio_data = recognizer.record(source)  # Record the entire audio file

    try:
        text = recognizer.recognize_google(audio_data)  # Use Google Web Speech API
        return text
    except sr.UnknownValueError:
        print("Speech Recognition could not understand audio")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results from Google Web Speech API; {e}")
        return ""

def transcribe_all_intervals(directory_path, interval_prefix, num_intervals):
    part5 = []
    for i in range(1, num_intervals + 1):
        wav_file = f"{directory_path}/{interval_prefix}_{i}.wav"
        text = transcribe_audio(wav_file)

        if text:
            with open("part2.txt", "a" ) as f:
                f.writelines(text + "\n")
        else:
            print(f"Interval {i}: Unable to transcribe")
   
# Example usage:
directory_path = "part2"
interval_prefix = "interval2"
num_intervals = 361

transcribe_all_intervals(directory_path, interval_prefix, num_intervals)
