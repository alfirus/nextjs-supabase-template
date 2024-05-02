"use client"

import { useState } from "react"
import RenderReactComponent from "./RenderReactComponent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function PreviewReactComponent() {
  const [code, setCode] = useState<string>("function MainComponent() {\n  return <div>Hello World</div>\n}")
  const [componentCode, setComponentCode] = useState<string>("")

  return (
    <div className="w-full p-20">
      <Tabs defaultValue="code">
        <TabsList>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="preview" onClick={() => setComponentCode(code)}>
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="code">
          <Textarea
            className="w-[80%] bg-black text-white"
            rows={100}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your React component code here"
          />
        </TabsContent>
        <TabsContent value="preview">
          <RenderReactComponent componentCode={componentCode} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
