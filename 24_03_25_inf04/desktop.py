from PyQt6.QtWidgets import (QApplication, QMainWindow, QLabel, QPushButton,
                             QVBoxLayout, QHBoxLayout, QWidget)
from PyQt6.QtGui import QFont, QPixmap, QPalette, QColor, QIcon
from PyQt6.QtCore import Qt
import sys


class AlbumMuzyczny:
    def __init__(self, wykonawca, tytul, liczba_utworow, rok_wydania, liczba_pobran):
        self.wykonawca = wykonawca
        self.tytul = tytul
        self.liczba_utworow = liczba_utworow
        self.rok_wydania = rok_wydania
        self.liczba_pobran = liczba_pobran


class MojeDzwiekiApp(QMainWindow):
    def __init__(self, numer_zdajacego):
        super().__init__()
        self.numer_zdajacego = numer_zdajacego
        self.albumy = []
        self.aktualny_album_index = 0

        self.wczytaj_dane()
        self.inicjalizuj_ui()
        self.wyswietl_album()

    def wczytaj_dane(self):
        try:
            with open("Data.txt", "r", encoding="utf-8") as file:
                lines = file.readlines()
        except FileNotFoundError:
            print("Plik Data.txt nie został znaleziony.")
            self.albumy.append(AlbumMuzyczny("Gorillaz", "The Now Now", 11, 2018, 11000102))
            return

        albums_stripped = list(filter(str.strip, lines))
        for i in range(0, len(albums_stripped), 5):
            try:
                album = AlbumMuzyczny(
                    wykonawca=albums_stripped[i].strip(),
                    tytul=albums_stripped[i + 1].strip().replace('"', ''),
                    liczba_utworow=int(albums_stripped[i + 2].strip()),
                    rok_wydania=int(albums_stripped[i + 3].strip()),
                    liczba_pobran=int(albums_stripped[i + 4].strip())
                )
                self.albumy.append(album)
            except (IndexError, ValueError) as e:
                print(f"Błąd podczas przetwarzania danych albumu: {e}")

        if not self.albumy:
            print("Nie udało się wczytać żadnych albumów.")
            self.albumy.append(AlbumMuzyczny("Gorillaz", "The Now Now", 11, 2018, 11000102))

    def inicjalizuj_ui(self):
        self.setWindowTitle(f"MojeDźwięki, Wykonał: {self.numer_zdajacego}")
        self.setGeometry(100, 100, 800, 300)

        palette = self.palette()
        palette.setColor(QPalette.ColorRole.Window, QColor("#2E8B57"))
        self.setPalette(palette)

        main_widget = QWidget()
        main_layout = QHBoxLayout()

        self.btn_poprzedni = QPushButton()
        pixmap_lewy = QPixmap("obraz3.png")
        pixmap_lewy = pixmap_lewy.scaledToHeight(70, Qt.TransformationMode.SmoothTransformation)
        self.btn_poprzedni.setIcon(QIcon(pixmap_lewy))
        self.btn_poprzedni.setIconSize(pixmap_lewy.size())
        self.btn_poprzedni.setFixedSize(96, 70)
        self.btn_poprzedni.setStyleSheet("background-color: transparent; border: none;")
        self.btn_poprzedni.clicked.connect(self.poprzedni_album)

        left_panel = QVBoxLayout()

        self.lbl_obraz = QLabel()
        pixmap_plyta = QPixmap("obraz.png")
        pixmap_plyta = pixmap_plyta.scaledToWidth(200, Qt.TransformationMode.SmoothTransformation)
        self.lbl_obraz.setPixmap(pixmap_plyta)
        self.lbl_obraz.setAlignment(Qt.AlignmentFlag.AlignCenter)
        left_panel.addWidget(self.lbl_obraz)

        download_layout = QHBoxLayout()

        self.lbl_liczba_pobran = QLabel()
        self.lbl_liczba_pobran.setStyleSheet("color: #61D918;")
        font_info = QFont()
        font_info.setPointSize(20)
        self.lbl_liczba_pobran.setFont(font_info)
        self.lbl_liczba_pobran.setAlignment(Qt.AlignmentFlag.AlignCenter)
        download_layout.addWidget(self.lbl_liczba_pobran)

        self.btn_pobierz = QPushButton("Pobierz")
        self.btn_pobierz.setStyleSheet("background-color: #61D918; color: black; font-weight: bold;")
        font_btn = QFont()
        font_btn.setPointSize(20)
        font_btn.setBold(True)
        self.btn_pobierz.setFont(font_btn)
        self.btn_pobierz.clicked.connect(self.zwieksz_pobrania)
        download_layout.addWidget(self.btn_pobierz)

        left_panel.addLayout(download_layout)
        left_panel.addStretch()

        right_panel = QVBoxLayout()

        self.lbl_wykonawca = QLabel()
        self.lbl_wykonawca.setStyleSheet("color: white;")
        font_wykonawca = QFont()
        font_wykonawca.setPointSize(50)
        self.lbl_wykonawca.setFont(font_wykonawca)
        self.lbl_wykonawca.setAlignment(Qt.AlignmentFlag.AlignCenter)
        right_panel.addWidget(self.lbl_wykonawca)

        self.lbl_tytul = QLabel()
        self.lbl_tytul.setStyleSheet("color: #61D918;")
        font_tytul = QFont()
        font_tytul.setPointSize(30)
        font_tytul.setItalic(True)
        self.lbl_tytul.setFont(font_tytul)
        self.lbl_tytul.setAlignment(Qt.AlignmentFlag.AlignCenter)
        right_panel.addWidget(self.lbl_tytul)

        self.lbl_liczba_utworow = QLabel()
        self.lbl_liczba_utworow.setStyleSheet("color: white;")
        self.lbl_liczba_utworow.setFont(font_info)
        self.lbl_liczba_utworow.setAlignment(Qt.AlignmentFlag.AlignCenter)
        right_panel.addWidget(self.lbl_liczba_utworow)

        self.lbl_rok_wydania = QLabel()
        self.lbl_rok_wydania.setStyleSheet("color: white;")
        self.lbl_rok_wydania.setFont(font_info)
        self.lbl_rok_wydania.setAlignment(Qt.AlignmentFlag.AlignCenter)
        right_panel.addWidget(self.lbl_rok_wydania)

        right_panel.addStretch()

        self.btn_nastepny = QPushButton()
        pixmap_prawy = QPixmap("obraz2.png")
        pixmap_prawy = pixmap_prawy.scaledToHeight(70, Qt.TransformationMode.SmoothTransformation)
        self.btn_nastepny.setIcon(QIcon(pixmap_prawy))
        self.btn_nastepny.setIconSize(pixmap_prawy.size())
        self.btn_nastepny.setFixedSize(96, 70)
        self.btn_nastepny.setStyleSheet("background-color: transparent; border: none;")
        self.btn_nastepny.clicked.connect(self.nastepny_album)

        main_layout.addWidget(self.btn_poprzedni)
        main_layout.addLayout(left_panel, 1)
        main_layout.addLayout(right_panel, 1)
        main_layout.addWidget(self.btn_nastepny)

        main_widget.setLayout(main_layout)
        self.setCentralWidget(main_widget)

    def wyswietl_album(self):
        if not self.albumy:
            return

        album = self.albumy[self.aktualny_album_index]
        self.lbl_wykonawca.setText(album.wykonawca)
        self.lbl_tytul.setText(album.tytul)
        self.lbl_liczba_utworow.setText(f"Liczba utworów: {album.liczba_utworow}")
        self.lbl_rok_wydania.setText(f"Rok wydania: {album.rok_wydania}")
        self.lbl_liczba_pobran.setText(f"Liczba pobrań: {album.liczba_pobran}")

    def poprzedni_album(self):
        if not self.albumy:
            return

        self.aktualny_album_index = (self.aktualny_album_index - 1) % len(self.albumy)
        self.wyswietl_album()

    def nastepny_album(self):
        if not self.albumy:
            return

        self.aktualny_album_index = (self.aktualny_album_index + 1) % len(self.albumy)
        self.wyswietl_album()


    """
        **********************************************
        nazwa funkcji: zwieksz_pobrania
        opis funkcji: Zwiększa liczbę pobrań aktualnie wyświetlanego albumu muzycznego o 1 
                   po kliknięciu przycisku "Pobierz" w interfejsie aplikacji
        parametry: self - referencja do obiektu klasy MojeDzwiekiApp
        zwracany typ i opis: brak - funkcja nie zwraca wartości, aktualizuje jedynie
                          wartość liczba_pobran w aktualnym albumie i odświeża wyświetlane dane
        autor: Łukasz Stępień
        ***********************************************
    """
    def zwieksz_pobrania(self):
        if not self.albumy:
            return

        self.albumy[self.aktualny_album_index].liczba_pobran += 1
        self.wyswietl_album()


def main():
    app = QApplication(sys.argv)
    numer_zdajacego = "Łukasz Stępień"
    window = MojeDzwiekiApp(numer_zdajacego)
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
