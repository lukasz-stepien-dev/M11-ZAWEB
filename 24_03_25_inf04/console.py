import string


class Album:
    def __init__(self, artist, album, songs_number, year, download_number):
        self.artist : string = artist
        self.album : string = album
        self.songs_number : int = songs_number
        self.year: int = year
        self.download_number : int = download_number

    # **********************************************
    # nazwa funkcji: print_album
    # opis funkcji: wyświetla informacje o albumie
    # parametry: obiekt, w którym znajduje się funkcja
    # zwracany typ i opis: brak zwracanego typu
    # autor: Łukasz Stępień
    # ***********************************************
    def print_album(self):
        print(f"""{self.artist}{self.album}{str(self.songs_number)}
{str(self.year)}
{str(self.download_number)}
""")

albums = []

try:
    with open('Data.txt', 'r') as file:
        lines = file.readlines()
except FileNotFoundError:
    print(f'The file Data.txt is not present.')

albums_stripped = list(filter(str.strip, lines))
for i in range(int(len(albums_stripped) / 5)):
    albums.append(Album(
        albums_stripped[i * 5],
        albums_stripped[i * 5 + 1],
        int(albums_stripped[i * 5 + 2]),
        int(albums_stripped[i * 5 + 3]),
        int(albums_stripped[i * 5 + 4])
    ))

for album in albums:
    album.print_album()