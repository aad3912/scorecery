import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
interface PropsMultiT {
  options: SelectOption[];
  setter: React.Dispatch<React.SetStateAction<SelectOption[]>>;
}

interface PropsSingleT {
  options: SelectOption[];
  setter: React.Dispatch<React.SetStateAction<SelectOption>>;
}

export const LeaguesSelectorMulti = ({ options, setter }: PropsMultiT) => {
  return (
    <Select
      components={animatedComponents}
      isMulti
      onChange={(newValue) => setter(newValue as SelectOption[])}
      options={options}
    />
  );
};

export const LeaguesSelector = ({ options, setter }: PropsSingleT) => {
  return (
    <Select
      onChange={(newValue) => setter(newValue as SelectOption)}
      options={options}
    />
  );
};
