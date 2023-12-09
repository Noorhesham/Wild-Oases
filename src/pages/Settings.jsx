import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return<div className=" max-w-[120rem] my-0 mx-auto flex flex-col gap-16 ">
    <h1  className=" font-semibold text-6xl ">Update hotel settings</h1>
    <UpdateSettingsForm/>
  </div>
}

export default Settings;
