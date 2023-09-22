type Mods = Record<string, boolean | string>;

export function classNames(classNames: string, mods: Mods, additional: string[]): string {

  return [
    classNames,
    ...additional,
    ...Object.entries(mods).filter(([value]) => Boolean(value)).map(([className]) => className),
  ].join(' ');
}