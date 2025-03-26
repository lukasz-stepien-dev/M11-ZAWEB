import sys

from PyQt6.QtCore import QSize
from PyQt6.QtGui import QPalette, QColor, QIcon
from PyQt6.QtWidgets import QMainWindow, QApplication, QWidget, QHBoxLayout, QPushButton


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("MojeDźwięki, Wykonał: Łukasz Stępień")
        self.setStyleSheet("background-color: seagreen;")
        central_widget = QWidget(self)
        central_widget.setFixedSize(QSize(200, 200))
        mainLayout = QHBoxLayout(central_widget)
        prev_btn = QPushButton()
        prev_btn.setIcon(QIcon("obraz3.png"))
        prev_btn.setFixedSize(96, 70)
        prev_btn.setIconSize(QSize(prev_btn.width(), prev_btn.height()))
        prev_btn.clicked.connect(self.prev_btn_clicked)
        mainLayout.addWidget(prev_btn)
        central_widget.setLayout(mainLayout)

    def prev_btn_clicked(self):
        self.close()

app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()