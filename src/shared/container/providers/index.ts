import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayJSDateProvider } from "./DateProvider/implementations/DayJSDateProvider";

container.registerSingleton<IDateProvider>("DateProvider", DayJSDateProvider);
