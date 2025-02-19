import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  AdmissionDTO,
  WardDTO,
  AdmissionTypeDTO,
  AgeTypeDTO,
} from "../../../generated";
import { TAPIResponseStatus } from "../../../state/types";
import { IState } from "../../../types";
import { generateColor } from "../../uiUtils/colorGenerator";

export const useAdmBySexData = () => {
  const { t } = useTranslation();
  const admissions = useSelector<IState, AdmissionDTO[]>(
    (state) => state.admissions.getAdmissions.data ?? []
  );
  const status = useSelector<IState, TAPIResponseStatus>(
    (state) => state.admissions.getAdmissions.status ?? "IDLE"
  );
  const success = useSelector<IState, boolean>((state) =>
    ["SUCCESS", "SUCCESS_EMPTY"].includes(
      state.admissions.getAdmissions.status ?? ""
    )
  );
  const labels = [t("common.male"), t("common.female")];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [
          admissions.filter((e) => e.patient?.sex === "M").length,
          admissions.filter((e) => e.patient?.sex === "F").length,
        ],
        borderJoinStyle: "bevel",
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
        hoverOffset: 4,
      },
    ],
  };

  const csvData = [
    {
      [t("common.male")]: admissions.filter((e) => e.patient?.sex === "M")
        .length,
    },
    {
      [t("common.female")]: admissions.filter((e) => e.patient?.sex === "F")
        .length,
    },
  ];

  return {
    status,
    data,
    csvData,
    success,
    total: admissions.length,
  };
};
