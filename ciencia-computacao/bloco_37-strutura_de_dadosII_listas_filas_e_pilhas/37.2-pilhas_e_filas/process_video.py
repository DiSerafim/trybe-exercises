# #2
import traceback
import sys
from rich import print

# #1
def load_video(video_path):
    print('Carregando vídeo do caminho:', video_path)
    # #2
    traceback.print_stack(file=sys.stdout)
    return 'fake vídeo'

def process_video(video_path):
    print('Carregando vídeo...')
    loaded_video = load_video(video_path)
    # Faz alguma coisa legal com o vídeo

# #2
process_video('path/to/my/video')