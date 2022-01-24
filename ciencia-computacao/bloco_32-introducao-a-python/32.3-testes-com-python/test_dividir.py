import pytest
from dividir import divide


def test_divisao_excecoes_quando_divide_por_zero():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
