import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Badge({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (type: string, label: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      params.delete(type, label);
      return params.toString();
    },
    [searchParams],
  );

  const handleRemoveFilter = () => {
    router.push(pathname + "?" + createQueryString(type, label));
  };
  return (
    <div className="flex items-center gap-1 bg-primary-lighter p-2 text-sm">
      <span>{label}</span>
      <button onClick={handleRemoveFilter}>
        <X strokeWidth={1} />
      </button>
    </div>
  );
}
