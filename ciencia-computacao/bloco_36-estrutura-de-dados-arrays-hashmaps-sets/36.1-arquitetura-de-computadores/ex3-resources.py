from subprocess import check_output


# Processador
cpu_information = check_output("lscpu").decode("UTF-8").split("\n")
desired_cpu_information = {
    "model name": "Modelo",
    "cpu()s": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "CacheL2",
    "l3": "Cache L3",
}
for desired_name, desired_description in desired_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(desired_name):
            information = information.split("  ")
            information = information[-1].strip()
            print(f"{desired_description}: {information}")


# Memória
memory_information = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information != ""
]
total_memory = int(memory_information[1]) / 1000
used_memory = int(memory_information[2]) / 1000
print(
    f"Memória total: {total_memory:.0f}MB\n"
    f"Memória utilizada: {used_memory:.0f}MB"
)


# Resultado
"""
Modelo: Intel(R) Core(TM) i5-2430M CPU @ 2.40GHz
Cache L1d: 64 KiB (2 instances)
Cache L1i: 64 KiB (2 instances)
CacheL2: 512 KiB (2 instances)
Cache L3: 3 MiB (1 instance)
Memória total: 3911MB
Memória utilizada: 2620MB
"""