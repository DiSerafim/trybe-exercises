import csv


def export_data(data):
    with open("dados/report.csv", mode="w") as file:
        report_write = csv.writer(file)
        for key, value in data.items():
            report_write.writerow((key, value))


if __name__ == "__main__":
    export_data({"c": "v", 123: 456})
