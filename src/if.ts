import Transf from "./Transf";

export const If = (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        if ((this as Transf).shouldDoNext) {
            originalMethod.apply(this, args);
        }
        (this as Transf).shouldDoNext = true
        return target
    };

    return descriptor
}