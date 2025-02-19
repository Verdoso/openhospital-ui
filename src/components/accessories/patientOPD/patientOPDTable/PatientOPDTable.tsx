import React, { FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpdDTO, OpdWithOperatioRowDTO } from "../../../../generated";
import {
  getOpds,
  getOpdsWithOperationRows,
} from "../../../../state/opds/actions";
import { IState } from "../../../../types";
import Table from "../../table/Table";
import { CircularProgress } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InfoBox from "../../infoBox/InfoBox";
import { renderDate } from "../../../../libraries/formatUtils/dataFormatting";
import { usePermission } from "../../../../libraries/permissionUtils/usePermission";
interface IOwnProps {
  shouldUpdateTable: boolean;
  handleEdit: (row: any) => void;
}

const PatientOPDTable: FunctionComponent<IOwnProps> = ({
  shouldUpdateTable,
  handleEdit,
}) => {
  const { t } = useTranslation();
  const canUpdate = usePermission("opd.update");
  const header = ["visitDate", "disease"];
  const dateFields = ["visitDate"];
  const label = {
    code: t("opd.code"),
    visitDate: t("opd.dateopd"),
    disease: t("opd.disease1"),
    disease2: t("opd.disease2"),
    disease3: t("opd.disease3"),
    note: t("opd.note"),
  };
  const order = ["visitDate", "disease"];
  const dispatch = useDispatch();
  const infoBoxRef = useRef<HTMLDivElement>(null);

  const data = useSelector<IState, OpdWithOperatioRowDTO[]>((state) =>
    state.opds.getOpds.data ? state.opds.getOpds.data : []
  );
  const opdStatus = useSelector<IState, string | undefined>(
    (state) => state.opds.getOpds.status
  );
  const errorMessage = useSelector<IState>(
    (state) => state.opds.getOpds.error?.message || t("common.somethingwrong")
  ) as string;
  const patientCode = useSelector<IState, number | undefined>(
    (state) => state.patients.selectedPatient.data?.code
  );
  useEffect(() => {
    if (shouldUpdateTable || patientCode)
      dispatch(getOpdsWithOperationRows(patientCode));
  }, [dispatch, patientCode, shouldUpdateTable]);

  const formatDataToDisplay = (data: OpdWithOperatioRowDTO[] | undefined) => {
    let results: any = [];
    if (data)
      results = data.map((item) => {
        return {
          code: item.opdDTO?.code,
          visitDate: item.opdDTO?.date ? renderDate(item.opdDTO.date) : "",
          disease: item.opdDTO?.disease?.description || "",
          disease2: item.opdDTO?.disease2?.description || "",
          disease3: item.opdDTO?.disease3?.description || "",
          note: item.opdDTO?.note || "",
        };
      });
    return results;
  };

  const onEdit = (row?: OpdDTO) => {
    handleEdit(data.find((item) => item.opdDTO.code === row?.code));
  };

  return (
    <div className="patientOpdTable">
      <h5>{t("common.previousentries")}</h5>
      {opdStatus === "SUCCESS" ? (
        <Table
          rowData={formatDataToDisplay(data)}
          dateFields={dateFields}
          tableHeader={header}
          labelData={label}
          columnsOrder={order}
          rowsPerPage={5}
          isCollapsabile={true}
          onEdit={canUpdate ? onEdit : undefined}
          addTitle={t("opd.addoperation")}
        />
      ) : (
        opdStatus === "SUCCESS_EMPTY" && (
          <InfoBox type="warning" message={t("common.emptydata")} />
        )
      )}
      {opdStatus === "LOADING" && (
        <CircularProgress style={{ marginLeft: "50%", position: "relative" }} />
      )}

      {opdStatus === "FAIL" && (
        <div ref={infoBoxRef}>
          <InfoBox type="error" message={errorMessage} />
        </div>
      )}
    </div>
  );
};
export default PatientOPDTable;
