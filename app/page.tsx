"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Bitcoin } from "lucide-react"

// Bitcoin address validation function
function validateBitcoinAddress(address: string): { isValid: boolean; type?: string; error?: string } {
  if (!address || typeof address !== "string") {
    return { isValid: false, error: "Address is required" }
  }

  // Remove whitespace
  address = address.trim()

  // Legacy P2PKH addresses (start with 1)
  if (address.match(/^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/)) {
    return { isValid: true, type: "Legacy P2PKH (Pay-to-Public-Key-Hash)" }
  }

  // Legacy P2SH addresses (start with 3)
  if (address.match(/^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/)) {
    return { isValid: true, type: "Legacy P2SH (Pay-to-Script-Hash)" }
  }

  // Bech32 addresses (start with bc1)
  if (address.match(/^bc1[a-z0-9]{39,59}$/)) {
    return { isValid: true, type: "Bech32 SegWit (Native SegWit)" }
  }

  // Taproot addresses (start with bc1p)
  if (address.match(/^bc1p[a-z0-9]{58}$/)) {
    return { isValid: true, type: "Taproot (Pay-to-Taproot)" }
  }

  return { isValid: false, error: "Invalid Bitcoin address format" }
}

export default function BitcoinValidator() {
  const [address, setAddress] = useState("")
  const [result, setResult] = useState<{ isValid: boolean; type?: string; error?: string } | null>(null)
  const [isValidating, setIsValidating] = useState(false)

  const handleValidate = async () => {
    if (!address.trim()) {
      setResult({ isValid: false, error: "Please enter a Bitcoin address" })
      return
    }

    setIsValidating(true)

    // Add a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    const validation = validateBitcoinAddress(address)
    setResult(validation)
    setIsValidating(false)
  }

  const handleClear = () => {
    setAddress("")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-4">
      <div className="max-w-2xl mx-auto pt-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bitcoin className="h-8 w-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-foreground">Bitcoin Address Validator</h1>
          </div>
          <p className="text-muted-foreground text-lg">Verify if your Bitcoin address is valid and identify its type</p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bitcoin className="h-5 w-5 text-orange-600" />
              Address Validation
            </CardTitle>
            <CardDescription>
              Enter a Bitcoin address to check if it's valid. Supports Legacy, SegWit, and Taproot formats.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Section */}
            <div className="space-y-3">
              <label htmlFor="address" className="text-sm font-medium text-foreground">
                Bitcoin Address
              </label>
              <Input
                id="address"
                placeholder="Enter Bitcoin address (e.g., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="font-mono text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleValidate()}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleValidate}
                disabled={isValidating}
                className="flex-1 bg-orange-600 hover:bg-orange-700"
              >
                {isValidating ? "Validating..." : "Validate Address"}
              </Button>
              <Button variant="outline" onClick={handleClear} disabled={isValidating}>
                Clear
              </Button>
            </div>

            {/* Results */}
            {result && (
              <Alert
                className={
                  result.isValid
                    ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20"
                    : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20"
                }
              >
                <div className="flex items-start gap-3">
                  {result.isValid ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <AlertDescription className="space-y-2">
                      <div
                        className={`font-semibold ${result.isValid ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}
                      >
                        {result.isValid ? "Valid Bitcoin Address" : "Invalid Bitcoin Address"}
                      </div>
                      {result.type && (
                        <div className="text-sm text-green-700 dark:text-green-300">
                          <strong>Type:</strong> {result.type}
                        </div>
                      )}
                      {result.error && (
                        <div className="text-sm text-red-700 dark:text-red-300">
                          <strong>Error:</strong> {result.error}
                        </div>
                      )}
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Info Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Supported Address Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-600">Legacy Addresses</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>
                    <strong>P2PKH:</strong> Starts with "1"
                  </div>
                  <div>
                    <strong>P2SH:</strong> Starts with "3"
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-600">Modern Addresses</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>
                    <strong>SegWit:</strong> Starts with "bc1"
                  </div>
                  <div>
                    <strong>Taproot:</strong> Starts with "bc1p"
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>This tool validates Bitcoin address formats only. Always verify addresses through multiple sources.</p>
        </div>
      </div>
    </div>
  )
}
