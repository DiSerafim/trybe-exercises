# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
# N° divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# N° divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# N° divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
# Ex: 3 -> [1, 2, "Fizz"]
from ex1 import fizzbuzz


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizzbuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"
