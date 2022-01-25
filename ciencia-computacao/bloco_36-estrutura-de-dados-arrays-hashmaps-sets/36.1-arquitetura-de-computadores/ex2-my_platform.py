import platform

print(
    f"Plataforma: {platform.system()}\n"
    f"Versão: {platform.release()}\n"
    f"Arquitetura: {platform.architecture()[0]}\n"
)


# Resultado
"""
Plataforma: Linux
Versão: 5.14.0-kali4-amd64
Arquitetura: 64bit
"""