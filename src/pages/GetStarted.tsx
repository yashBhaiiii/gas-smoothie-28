
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ArrowLeft, ArrowRight, Check, Lightning, BookOpen, Tool, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const GetStarted = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pt-36 md:pb-16 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Getting Started with Gas Optimization</h1>
              <p className="text-lg text-gray-600 max-w-3xl mb-10">
                Follow this step-by-step guide to understand and implement gas optimization techniques in your Aptos Move smart contracts.
              </p>
              <Link to="/" className="group flex items-center text-blue-600 hover:text-blue-800 mb-10">
                <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <Tabs defaultValue="understand" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="understand">Understand</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="optimize">Optimize</TabsTrigger>
                <TabsTrigger value="implement">Implement</TabsTrigger>
              </TabsList>
              
              {/* Understand Tab */}
              <TabsContent value="understand" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen size={20} className="text-blue-600" />
                      Step 1: Understanding Gas in Aptos
                    </CardTitle>
                    <CardDescription>
                      Learn the fundamentals of gas consumption in Aptos Move
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p>
                        Before optimizing gas usage, it's essential to understand how gas works in Aptos. Gas in Aptos is used to measure and price computational resources used during transaction execution.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6">Key concepts:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-medium">Computation Gas Fee:</span> Cost of executing computational operations in your code</li>
                        <li><span className="font-medium">Storage Gas Fee:</span> Cost of reading from and writing to on-chain storage</li>
                        <li><span className="font-medium">Transaction Size Fee:</span> Cost based on the size of your transaction payload</li>
                      </ul>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mt-6">
                        <h4 className="font-medium text-blue-700 mb-2">Did you know?</h4>
                        <p className="text-sm text-gray-700">
                          Different operations in Move have different gas costs. For example, storage operations are generally more expensive than simple arithmetic computations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div></div>
                    <Button onClick={() => document.querySelector('[data-value="analyze"]')?.click()}>
                      Next: Analyze Your Code
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Analyze Tab */}
              <TabsContent value="analyze" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightning size={20} className="text-blue-600" />
                      Step 2: Analyzing Gas Usage
                    </CardTitle>
                    <CardDescription>
                      Learn to identify gas-intensive operations in your code
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p>
                        Before making optimizations, you need to identify which parts of your code are consuming the most gas. This step is crucial for focusing your optimization efforts where they'll have the biggest impact.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6">Analyzing tools:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Aptos CLI</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Use the Aptos CLI to estimate gas usage without deploying your contract:
                          </p>
                          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-auto">
                            aptos move run \<br/>
                            --function-id '0x1::Module::function' \<br/>
                            --args arg1 arg2 \<br/>
                            --estimate-gas
                          </pre>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Aptos Explorer</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Use Aptos Explorer to analyze gas usage of deployed contracts:
                          </p>
                          <ol className="text-sm list-decimal pl-4 space-y-1">
                            <li>Go to explorer.aptoslabs.com</li>
                            <li>Search for your transaction</li>
                            <li>View the "Gas Used" section</li>
                            <li>Review the breakdown of gas consumption</li>
                          </ol>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mt-6">
                        <h4 className="font-medium text-blue-700 mb-2">Pro Tip:</h4>
                        <p className="text-sm text-gray-700">
                          Look specifically for loops, large data structures, and frequent storage operations in your code. These are often the biggest gas consumers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => document.querySelector('[data-value="understand"]')?.click()}>
                      <ArrowLeft size={16} className="mr-2" />
                      Previous
                    </Button>
                    <Button onClick={() => document.querySelector('[data-value="optimize"]')?.click()}>
                      Next: Apply Strategies
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Optimize Tab */}
              <TabsContent value="optimize" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tool size={20} className="text-blue-600" />
                      Step 3: Applying Optimization Strategies
                    </CardTitle>
                    <CardDescription>
                      Learn practical strategies to reduce gas consumption
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p>
                        Now that you've identified gas-intensive areas in your code, it's time to apply specific optimization strategies to reduce gas consumption.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6">Key optimization strategies:</h3>
                      
                      <div className="space-y-4 mt-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium flex items-center gap-2 mb-3">
                            <Check size={16} className="text-green-500" />
                            Reduce Computational Complexity
                          </h4>
                          <ul className="list-disc pl-6 text-sm space-y-2">
                            <li>Replace loops with mathematical formulas when possible</li>
                            <li>Precompute values off-chain and pass them as parameters</li>
                            <li>Use efficient data structures (e.g., vectors over maps for small collections)</li>
                          </ul>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium flex items-center gap-2 mb-3">
                            <Check size={16} className="text-green-500" />
                            Optimize Storage Usage
                          </h4>
                          <ul className="list-disc pl-6 text-sm space-y-2">
                            <li>Minimize on-chain storage by storing only essential data</li>
                            <li>Use events for historical data instead of storing in state</li>
                            <li>Delete resources that are no longer needed</li>
                            <li>Batch storage operations to reduce overall gas costs</li>
                          </ul>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium flex items-center gap-2 mb-3">
                            <Check size={16} className="text-green-500" />
                            Reduce Transaction Size
                          </h4>
                          <ul className="list-disc pl-6 text-sm space-y-2">
                            <li>Use smaller data types when appropriate</li>
                            <li>Pack data efficiently to minimize redundancy</li>
                            <li>Combine multiple operations into a single transaction</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mt-6">
                        <h4 className="font-medium text-blue-700 mb-2">Remember:</h4>
                        <p className="text-sm text-gray-700">
                          Always test your optimizations thoroughly to ensure they don't introduce bugs or vulnerabilities. Gas efficiency should not come at the cost of security or correctness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => document.querySelector('[data-value="analyze"]')?.click()}>
                      <ArrowLeft size={16} className="mr-2" />
                      Previous
                    </Button>
                    <Button onClick={() => document.querySelector('[data-value="implement"]')?.click()}>
                      Next: Implementation
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Implement Tab */}
              <TabsContent value="implement" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap size={20} className="text-blue-600" />
                      Step 4: Implementation & Testing
                    </CardTitle>
                    <CardDescription>
                      Put gas optimization into practice with real-world examples
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p>
                        Now it's time to implement the optimizations you've learned and test their effectiveness. This final step ensures your optimizations work as expected and provide measurable gas savings.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6">Implementation workflow:</h3>
                      
                      <ol className="list-decimal pl-6 space-y-4 mt-4">
                        <li>
                          <span className="font-medium">Create a baseline measurement</span>
                          <p className="text-sm text-gray-700 mt-1">
                            Before making any changes, measure the gas consumption of your original code to establish a baseline for comparison.
                          </p>
                        </li>
                        
                        <li>
                          <span className="font-medium">Implement one optimization at a time</span>
                          <p className="text-sm text-gray-700 mt-1">
                            Make changes incrementally, focusing on one optimization strategy at a time. This makes it easier to identify which changes provide the most benefit.
                          </p>
                        </li>
                        
                        <li>
                          <span className="font-medium">Test each optimization</span>
                          <p className="text-sm text-gray-700 mt-1">
                            After each change, test thoroughly to ensure the code still works correctly. Measure gas consumption to quantify the improvement.
                          </p>
                        </li>
                        
                        <li>
                          <span className="font-medium">Document your results</span>
                          <p className="text-sm text-gray-700 mt-1">
                            Keep track of which optimizations provided the most significant gas savings for future reference.
                          </p>
                        </li>
                      </ol>
                      
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-6 text-sm">
                        <h4 className="font-medium text-white mb-3">Example: Optimizing a Loop</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs text-red-400 mb-1">Before:</div>
                            <pre className="overflow-auto">
{`module example::inefficient {
  public fun sum_values(n: u64): u64 {
    let sum = 0;
    let i = 0;
    while (i < n) {
      sum = sum + i;
      i = i + 1;
    }
    sum
  }
}`}
                            </pre>
                          </div>
                          <div>
                            <div className="text-xs text-green-400 mb-1">After:</div>
                            <pre className="overflow-auto">
{`module example::optimized {
  public fun sum_values(n: u64): u64 {
    // Mathematical formula: sum = n * (n - 1) / 2
    if (n == 0) return 0;
    n * (n - 1) / 2
  }
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mt-6">
                        <h4 className="font-medium text-blue-700 mb-2">Ready for deployment?</h4>
                        <p className="text-sm text-gray-700">
                          Once you're satisfied with your optimizations, deploy your contract using the Aptos CLI:
                        </p>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs mt-2 overflow-auto">
                          aptos move publish --named-addresses example=0xYourAddress
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => document.querySelector('[data-value="optimize"]')?.click()}>
                      <ArrowLeft size={16} className="mr-2" />
                      Previous
                    </Button>
                    <div></div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            
            {/* CTA Section */}
            <div className="bg-blue-50 rounded-xl p-6 mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to optimize your Aptos Move contracts?</h3>
              <p className="text-gray-700 mb-6">
                Apply these strategies to your own projects and see significant improvements in gas efficiency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button>
                  <BookOpen size={16} className="mr-2" />
                  Explore Advanced Techniques
                </Button>
                <Button variant="outline">
                  Download Optimization Checklist
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
