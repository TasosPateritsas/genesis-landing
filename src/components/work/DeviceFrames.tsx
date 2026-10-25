import Image from "next/image";

function Dots({ size }: { size: number }) {
  return (
    <span className="flex items-center" style={{ gap: Math.max(4, size / 2) }} aria-hidden>
      {Array.from({ length: 3 }, (_, index) => (
        <span
          key={index}
          className="rounded-full bg-[#C5CDC8]"
          style={{ width: size, height: size }}
        />
      ))}
    </span>
  );
}

export function BrowserFrame({
  image,
  alt,
  domain,
  barHeight,
  dotSize,
  domainSize,
  radiusClass,
  shadowClass = "",
  className = "",
  sizes,
  barColor = "#F2F5F4",
}: {
  image: string;
  alt: string;
  domain?: string;
  barHeight: number;
  dotSize: number;
  domainSize: number;
  radiusClass: string;
  shadowClass?: string;
  className?: string;
  sizes: string;
  barColor?: string;
}) {
  return (
    <div className={`overflow-hidden ${radiusClass} ${shadowClass} ${className}`} style={{ backgroundColor: barColor }}>
      <div className="relative flex items-center px-3" style={{ height: barHeight, backgroundColor: barColor }}>
        <Dots size={dotSize} />
        {domain ? (
          <span
            className="absolute left-1/2 max-w-[68%] -translate-x-1/2 truncate rounded-full bg-white px-2.5 py-0.5 font-mono leading-none text-[#5A675F]"
            style={{ fontSize: domainSize }}
          >
            {domain}
          </span>
        ) : null}
      </div>
      <div className="relative aspect-[1440/900] w-full bg-white">
        <Image src={image} alt={alt} fill className="object-cover object-top" sizes={sizes} />
      </div>
    </div>
  );
}

export function PhoneFrame({
  image,
  alt,
  border,
  radius,
  className = "",
  sizes,
}: {
  image: string;
  alt: string;
  border: number;
  radius: number;
  className?: string;
  sizes: string;
}) {
  return (
    <div
      className={`overflow-hidden bg-[#0E1413] ${className}`}
      style={{ border: `${border}px solid #0E1413`, borderRadius: radius }}
    >
      <div className="relative aspect-[375/700] w-full overflow-hidden bg-white" style={{ borderRadius: Math.max(radius - border, 8) }}>
        <Image src={image} alt={alt} fill className="object-cover object-top" sizes={sizes} />
      </div>
    </div>
  );
}
