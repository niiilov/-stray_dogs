import { cn } from "@shared/lib/utils";
import { Input } from "./input";
import { Label } from "./label";

interface InputWithLabelProps {
  label: string;
  type: string;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean; // добавили required
}

export function InputWithLabel({
  label,
  type,
  id,
  placeholder,
  className,
  onChange,
  value,
  required, // получили required
}: InputWithLabelProps) {
  return (
    <div className={cn("grid w-full items-center gap-3", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        onChange={onChange}
        value={value}
        id={id}
        placeholder={placeholder}
        required={required} // передали required в Input
      />
    </div>
  );
}
