from compute_order import get_order
from timeit import timeit

import hund_thousand_names
import thousand_names

if __name__ == "__main__":

    print(
        "> > > tempo entrada pequena: "
        + str(timeit(lambda: get_order(thousand_names.DATA), number=1))
    )

    print(
        "> > > tempo entrada grande: "
        + str(timeit(lambda: get_order(hund_thousand_names.DATA), number=1))
    )
