import ControlRoom from "./src/central_manager/control_room";

(async () => {
  const controlRoom = new ControlRoom();
  await controlRoom.startAutomation("pen drive");
})();
