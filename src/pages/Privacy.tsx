import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-card rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-playfair font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Last updated: July 1, 2024
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Alpha High School ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
              <li>That is about you but individually does not identify you; and/or</li>
              <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To present our website and its contents to you;</li>
              <li>To provide you with information, products, or services that you request from us;</li>
              <li>To fulfill any other purpose for which you provide it;</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us;</li>
              <li>To notify you about changes to our website or any products or services we offer or provide through it;</li>
              <li>In any other way we may describe when you provide the information; and</li>
              <li>For any other purpose with your consent.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To our subsidiaries and affiliates;</li>
              <li>To contractors, service providers, and other third parties we use to support our business;</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets;</li>
              <li>To fulfill the purpose for which you provide it;</li>
              <li>For any other purpose disclosed by us when you provide the information;</li>
              <li>With your consent.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to Our Privacy Policy</h2>
            <p>
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at: info@alphahighschool.edu.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;