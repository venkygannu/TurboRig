import { createContext, useContext, useState } from 'react'

const EnquiryContext = createContext(null)

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [productName, setProductName] = useState(null)

  const openEnquiry = (name = null) => {
    setProductName(name)
    setOpen(true)
  }

  const closeEnquiry = () => {
    setOpen(false)
    setProductName(null)
  }

  return (
    <EnquiryContext.Provider value={{ open, productName, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider')
  return ctx
}
