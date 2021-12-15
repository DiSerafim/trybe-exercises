import area


# numero de pessoas por metro quadrado em média
PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2
# em metros
FIELD_LENGTH = 240
# em metros
FIELD_WIDTH = 45
# pessoas no concerto
PEOPLE_AT_CONCERT = area.rectangle(FIELD_LENGTH, FIELD_WIDTH)


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
# Estão presentes no show aproximadamente 10800 pessoas
