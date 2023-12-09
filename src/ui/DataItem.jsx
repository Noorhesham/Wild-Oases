function DataItem({ icon, label, children }) {
  return (
    <div className=" flex items-center gap-6 py-3 px-0">
      <span className=" flex items-center gap-3 font-semibold ">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
