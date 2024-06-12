import ControlRoom from "./src/central_manager/control_room.js";
import MarketplaceOrchestrator from "./src/orchestrator/marketplace_orchestrator.js";

function parseArgs(args) {
  const result = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace("--", "");
    const value = args[i + 1];
    result[key] = value;
  }
  return result;
}

const args = parseArgs(process.argv.slice(3));

(async () => {
  const orchestrator = new MarketplaceOrchestrator();
  const controlRoom = new ControlRoom(orchestrator);

  await controlRoom.startAutomation(args.marketplace, args.productName);
})();
