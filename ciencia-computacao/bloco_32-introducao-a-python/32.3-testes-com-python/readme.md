<!-- Aula Ao Vivo -->

<!-- cria ambiente virtual -->
python3 -m venv .venv && source .venv/bin/activate

<!-- Intalar as dependencias do projetos -->
pip install -r dev-requirements.txt

<!-- executar os testes -->
python -m pytest