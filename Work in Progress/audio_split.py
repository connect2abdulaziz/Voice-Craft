from pydub import AudioSegment
import math

def split_audio(audio_path, interval_seconds):
    sound = AudioSegment.from_file(audio_path)
    interval_milliseconds = interval_seconds * 1000
    num_intervals = math.ceil(len(sound) / interval_milliseconds)

    for i in range(num_intervals):
        start_time = i * interval_milliseconds
        end_time = min((i + 1) * interval_milliseconds, len(sound))
        interval = sound[start_time:end_time]
        interval.export(f"part5/interval5_{i+1}.wav", format="wav")

# Example usage:

split_audio("part5.mp3", 10)
