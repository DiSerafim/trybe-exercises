from e_impar import impar


def test_e_impar_quando_retorna_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert impar(3) is True


def test_retorna_false_quando_o_numero_não_e_impar():
    "Para um número par a função deve retornar o valor False"
    assert impar(2) is False
