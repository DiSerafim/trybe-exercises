""" Desafio seguindo o "ex2.py" """
# Caso a empresa precise fazer essa consulta frequentemente, como você pode tornar essas consultas mais eficientes?
# Como você pode guardar o resultado de consultas anteriores?

""" Solução """
# Quando você adiciona uma pessoa, ela pode ser adicionada em qualquer equipe abaixo dela.
# Como você recebe o primeiro boss, para atualizar o score entre esse boss e o local que a pessoa foi efetivamente alocada, basta ir atualizando o score na medida em que você vai tentando uma nova equipe.
# A parte mais complicada é atualizar desde a presidência até o primeiro boss.
# A gente tem uma estrutura que nos diz quem é subordinado a quem, mas não temos um jeito imediato de consultar quem é chefe de quem.
# Então uma possível solução é, a cada inserção, manter o controle da chefia imediata daquela pessoa.
# Adicionamos a hash imediate_boss, que é atualizada antes de realmente tentarmos alocar a pessoa.
# A função 'add_person' foi renomeada para 'fit_person' e agora atualizada o score de cada boss que tentamos encaixar a nova contratada.
# Como os scores são atualizados na medida em que fazemos as inserções, a função get_score agora precisa apenas fazer uma consulta simples à estrutura scores.



class Hierarchy:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}


    def get_score(self, person):
        if person in self.scores:
            print("Já calculei esse escore antes")
            return self.scores[person]

        this_score = 1

        for subordinate in self.subordinates[person]:
            this_score += self.get_score(subordinate)
        
        self.scores[person] = this_score
        return this_score

if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    hierarchy = Hierarchy(subordinates)


print(hierarchy.get_score(1))  # 7
print(hierarchy.get_score(2))  # 5
print(hierarchy.get_score(3))  # 1
print(hierarchy.get_score(4))  # 4
print(hierarchy.get_score(5))  # 2
print(hierarchy.get_score(6))  # 1
print(hierarchy.get_score(7))  # 1

""" Resultado """
# python3 ex3.py 

# 7
# Já calculei esse escore antes
# 5
# Já calculei esse escore antes
# 1
# Já calculei esse escore antes
# 4
# Já calculei esse escore antes
# 2
# Já calculei esse escore antes
# 1
# Já calculei esse escore antes
# 1
