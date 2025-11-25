export const NOTARIES_BY_ADDRESS_LINES = ["NotariesBy", "Attn: Jill Munoz, President", "PO Box 452", "Elfers, FL 34680"]

export const NOTARIES_BY_ADDRESS_TEXT = NOTARIES_BY_ADDRESS_LINES.join("\n")

type AddressProps = {
  className?: string
  showLabel?: boolean
  label?: string
  ariaLabel?: string
}

export function Address({ className, showLabel = false, label = "Mailing Address", ariaLabel }: AddressProps) {
  const finalAriaLabel =
    ariaLabel ?? "NotariesBy mailing address: Attn: Jill Munoz, President, PO Box 452, Elfers, FL 34680"

  return (
    <div className={className}>
      {showLabel && <p className="mb-1 font-medium text-sm text-gray-900">{label}</p>}
      <address aria-label={finalAriaLabel} className="not-italic leading-6 whitespace-pre-line">
        {NOTARIES_BY_ADDRESS_TEXT}
      </address>
    </div>
  )
}
