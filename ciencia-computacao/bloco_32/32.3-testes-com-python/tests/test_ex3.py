# Faça uma função que valide um e-mail nos seguintes critérios
# abaixo, lançando uma exceção quando o valor for inválido. Endereços de email
# válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores;
# O nome de usuário deve iniciar com letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é três.
# 🦜 As funções isalpha e isdigit podem ser utilizadas para verificar se uma
# letra ou palavra são compostas de somente caracteres ou dígitos.
# Exemplo: "1".isaplha() -> False , "a".isalpha() -> True
import pytest
from ex3 import validate_email


def test_username_can_only_contain_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("a1993@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("aa-a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("a_a1a-a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("a@nomewebsite.ext") is None


def test_username_when_dont_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert validate_email("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert validate_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website123.pyth")
