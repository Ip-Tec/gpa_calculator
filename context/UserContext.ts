// context/UserContext.ts
import { createContext } from "react";

import { NewCourse } from "@/type/index";

export const UserDataContext = createContext<NewCourse | undefined>(undefined);
