import Arrowt from "./Arrowt";

export const If = (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        if ((this as Arrowt).shouldDoNext) {
            originalMethod.apply(this, args);
        }
        (this as Arrowt).shouldDoNext = true
        return target
    };

    return descriptor
}