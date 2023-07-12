import React, { type HTMLInputTypeAttribute } from "react";
import {
  type Path,
  type FieldValues,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  field_id: Path<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  isHidden?: boolean;
}

export default function DynamicInput<T extends FieldValues>(props: Props<T>) {
  return (
    <div className={`max-w-sm ${props.isHidden === true ? "hidden" : ""}`}>
      <label className="" htmlFor={props.field_id}>
        <span className=" capitalize">{props.label}</span>
      </label>
      <input
        id={props.field_id}
        {...props.register(props.field_id, {
          valueAsNumber: props.type === "number" ? true : false,
        })}
        placeholder={props.placeholder}
        className=" w-full ring-1  placeholder:text-xs placeholder:text-gray-500"
        type={props.type}
        defaultValue={
          props.type === "date"
            ? new Date().toLocaleDateString("en-CA")
            : undefined
        }
      />
      {props.errors[props.field_id] && (
        <label className="label">
          <span className="label-text-alt lowercase text-red-500 first-letter:capitalize">
            {props.errors[props.field_id]?.message?.toString()}
          </span>
        </label>
      )}
    </div>
  );
}
