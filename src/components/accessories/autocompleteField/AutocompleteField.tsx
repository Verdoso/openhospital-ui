import { debounce, FormControl, FormHelperText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, {
  Fragment,
  FC,
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
} from "react";
import { DefaultOptionType, IProps } from "./types";
import "./styles.scss";
import { Trans, useTranslation } from "react-i18next";
import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
} from "@material-ui/lab";
import _ from "lodash";

const AutocompleteField: FC<IProps> = ({
  fieldName,
  id = fieldName,
  fieldValue,
  label,
  isValid,
  errorText,
  onBlur,
  options,
  isLoading = false,
  disabled,
  theme,
  freeSolo = false,
  clearOnBlur = false,
  autoSelect = false,
  onInputChange,
  getOptionLabel,
  renderOption,
  getOptionSelected,
  onChange,
  selectOnFocus,
  handleHomeEndKeys,
  options_limit = 10,
  optionsComparator = (option: DefaultOptionType, val: string | number) =>
    option.value + "" === val + "",
}) => {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  const getFullObject = (val: string | number) => {
    const res =
      options?.find((el) => optionsComparator(el, val)) || val || null;
    return res;
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const result = _.filter(options, (obj) =>
      obj.label === inputValue ? obj.value : ""
    );

    if (result?.[0]?.value) {
      setValue(result[0].value);
      onBlur(e, result[0].value);
    } else {
      setValue(inputValue);
      onBlur(e, inputValue);
    }
  };

  const debounceUpdate = useCallback(
    debounce((value: any) => {
      setValue(value);
    }, 250),
    []
  );

  useEffect(() => {
    setValue(fieldValue + "");
  }, [fieldValue]);

  const handleOnChange = (e: object, val: any | null) => {
    if (onChange) onChange(e, val);
    else {
      debounceUpdate(val?.value || val || "");
    }
  };

  const handleOnInputChange = (event: ChangeEvent<{}>, value: string) => {
    setInputValue(value);
    onInputChange && onInputChange(event, value);
  };

  const optionLabel = (option: DefaultOptionType | string) => {
    if (typeof option === "string") {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.label) {
      return option.label;
    }
    // Regular option
    return option.label;
  };

  const isSelected = (option: DefaultOptionType, v: DefaultOptionType) => {
    return option.value === v.value;
  };

  const rendOption = (option: DefaultOptionType | string, props: any) => {
    return (
      <Fragment>{typeof option === "string" ? option : option.label}</Fragment>
    );
  };

  const filter = createFilterOptions<DefaultOptionType>({
    limit: options_limit,
  });

  const filterOptions = (
    options: DefaultOptionType[],
    state: FilterOptionsState<DefaultOptionType>
  ) => {
    const filtered = filter(options, state);
    if (freeSolo) {
      const { inputValue } = state;
      // Suggest the creation of a new value
      const isExisting = options.some((option) => inputValue === option.value);
      if (inputValue !== "" && !isExisting) {
        filtered.push({
          label: t("common.addnewoption") + " " + inputValue,
          value: inputValue,
        } as DefaultOptionType);
      }
    }
    return filtered;
  };

  const actualClassName =
    theme === "light" ? "autocomplete__light" : "autocomplete";
  return (
    <FormControl variant="outlined" className={actualClassName}>
      <Autocomplete
        id={id}
        filterOptions={freeSolo ? filterOptions : undefined}
        noOptionsText={t("common.nooptionsfound")}
        disabled={disabled}
        freeSolo={freeSolo}
        autoSelect={autoSelect}
        loading={isLoading}
        options={options}
        clearOnBlur={clearOnBlur}
        selectOnFocus={selectOnFocus}
        handleHomeEndKeys={handleHomeEndKeys}
        onInputChange={handleOnInputChange}
        getOptionLabel={getOptionLabel ? getOptionLabel : optionLabel}
        value={getFullObject(value)}
        getOptionSelected={getOptionSelected ? getOptionSelected : isSelected}
        renderOption={renderOption ? renderOption : rendOption}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        renderInput={(params) => (
          <TextField
            label={label}
            {...params}
            name={fieldName}
            variant="outlined"
            size="small"
            error={isValid}
            fullWidth
          />
        )}
      />
      <FormHelperText error>{errorText || ""}</FormHelperText>
    </FormControl>
  );
};

export default AutocompleteField;
