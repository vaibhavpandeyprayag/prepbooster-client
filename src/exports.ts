import { createContext } from "react";

export interface TestInterface {
  testId: number;
  running: boolean;
}

export interface TestContextInterface {
  test: TestInterface;
  setTest: any;
}

export const pageMap: { [number: number]: string } = {
  1: "Dashboard",
  2: "Profile",
  3: "Test",
  4: "Performance",
};

export const UserContext = createContext<any>({});
export const PageContext = createContext<any>({});
export const TestContext = createContext<TestContextInterface>({
  test: {
    testId: 0,
    running: false,
  },
  setTest: {},
});
