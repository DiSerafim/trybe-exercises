from enum import Enum, auto
from random import randint

class Frame:
    PINS = 10
    def __init__(self):
        self.first_roll = 0
        self.second_roll = 0
        self.type = FrameTypes.UNPLAYED


    def play(self):
        self.first_roll = self._roll()
        pins_left = self.PINS - self.first_roll
        if pins_left:
            self.second_roll = self._roll(pins_left)
        self.__check_type()


    @staticmethod
    def _roll(pins_left=PINS):
        return randint(0, pins_left)


    def __pins_down(self):
        return self.first_roll + self.second_roll


    def __check_type(self):
        if self.first_roll == self.PINS:
            self.type = FrameTypes.STRIKE
        elif self.__pins_down() == self.PINS:
            self.type = FrameTypes.SPARE
        else:
            self.type = FrameTypes.REGULAR


class FrameTypes(Enum):
    UNPLAYED = auto()
    REGULAR = auto()
    SPARE = auto()
    STRIKE = auto()


class TenthFrame(Frame):
    def __init__(self):
        super().__init__()
        self.third_roll = 0


    def play(self):
        super().play()
        if self.type == FrameTypes.SPARE:
            self.third_roll = self._roll()
        elif self.type == FrameTypes.STRIKE:
            self.second_roll = self._roll()
            pins_left = self.PINS - self.second_roll
            if pins_left:
                self.third_roll = self._roll(pins_left)
            else:
                self.third_roll = self._roll()