import pytest
from testando_falhas import divide


def test_dividir_quando_outro_numero_e_zero_levanta_uma_excecao():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
