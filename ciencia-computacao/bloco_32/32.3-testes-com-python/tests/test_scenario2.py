import pytest
import json

from scenario2 import retrieve_stock_from_json
from unittest.mock import mock_open, patch
from tests.test_scenario1_3 import stock


def test_when_successful_it_must_return_stock_of_products(stock):
    # 'mock_open' é um falso 'open'
    with patch("builtins.open", mock_open(read_data=json.dumps(stock))):
        given = retrieve_stock_from_json("qualquerum.json")
        assert given == stock


# se der erro de formato
def test_when_extension_was_incorrect_raises_on_exception():
    with pytest.raises(ValueError, match="Formato inválido"):
        retrieve_stock_from_json("naosouumjson.mp3")
