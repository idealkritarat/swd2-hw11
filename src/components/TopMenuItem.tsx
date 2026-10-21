import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="border-b-2 border-transparent px-1 py-2 text-sm font-bold text-slate-300 transition hover:border-amber-400 hover:text-white uppercase"
    >
      {title}
    </Link>
  );
}
