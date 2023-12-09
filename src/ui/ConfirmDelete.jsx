
import Button from "./Button";

function ConfirmDelete({ resourceName, onConfirm, disabled,CloseForm }) {
  return (
    <div className=" w-[50rem] flex flex-col gap-5">
      <h3 className=" font-semibold text-6xl " >Delete {resourceName} </h3>
      <p className=" text-gray-500 mb-8">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className=" flex justify-end gap-5">
        <Button variation="secondary" onClick={CloseForm} disabled={disabled}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
