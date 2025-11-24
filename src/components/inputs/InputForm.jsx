export default function InputForm({ label, type, placeholder, customStyles }) {
  return (
    <div className={customStyles}>
      <label
        className="capitalize text-sm xl:text-base 2xl:text-lg"
        htmlFor={type}
      >
        {label}
      </label>
      <input
        id={type}
        type={type}
        className="w-full h-10 p-2 border-b border-main-black placeholder:text-sm text-sm xl:text-base 2xl:text-lg"
        placeholder={placeholder}
      />
    </div>
  );
}
