# Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa
# 69 5683. Claro que existem alguns problemas, uma vez que alguns números de
# telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão
# associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por letras
# maiúsculas (A-Z), hifens (-) e os números 1 e 0.
# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9
# Exemplo de entrada:
# 1-HOME-SWEET-HOME
# MY-MISERABLE-JOB
# Saídas correspondentes:
# 1-4663-79338-4663
# 69-647372253-562
# Curiosidade : A frase "The quick brown fox jumps over the lazy dog" é um
# pantograma (frase com sentido em que são usadas todas as letras do alfabeto
# de determinada língua) da língua inglesa.
# Verifique casos de entrada maior que 30 caractere, vazia, caracteres inválido

import pytest
from ex2 import translate_to_number


def test_when_abc_should_be_converted_in_2():
    assert translate_to_number("ABC") == "222"


def test_when_def_should_be_converted_in_3():
    assert translate_to_number("DEF") == "333"


def test_when_ghi_should_be_converted_in_4():
    assert translate_to_number("GHI") == "444"


def test_when_jkl_should_be_converted_in_5():
    assert translate_to_number("JKL") == "555"


def test_when_mno_should_be_converted_in_6():
    assert translate_to_number("MNO") == "666"


def test_when_pqrs_should_be_converted_in_7():
    assert translate_to_number("PQRS") == "7777"


def test_when_tuv_should_be_converted_in_8():
    assert translate_to_number("TUV") == "888"


def test_when_wxyz_should_be_converted_in_9():
    assert translate_to_number("WXYZ") == "9999"


def test_when_dashe_zero_one_should_be_keeped():
    assert translate_to_number("0-1") == "0-1"


def test_when_expression_should_be_at_least_one_char():
    with pytest.raises(ValueError):
        translate_to_number("")


def test_when_expression_maximum_are_thirty_chars():
    long_expression = (
        "1111111111"  # 10 chars
        "1111111111"
        "1111111111"
        "1"
    )
    with pytest.raises(ValueError):
        translate_to_number(long_expression)


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        translate_to_number("I-****-MY_JOB")
