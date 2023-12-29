// util/store.ts
import { NewCourse } from "@/type/index";

export let data: NewCourse;

export function SetData(UserData: NewCourse) {
  data = UserData;
}

export function GetData() {
  if (data.years.length == 0) {
    return "Click on New Course Year to add a Course";
  }
  return data;
}
