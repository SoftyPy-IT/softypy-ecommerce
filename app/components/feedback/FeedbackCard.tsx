"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe, Facebook } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FeedbackData } from "./feedback-data";


interface FeedbackCardProps {
  item: FeedbackData;
}

export default function FeedbackCard({ item }: FeedbackCardProps) {
  return (
    <Card
      key={item._id}
      className="flex h-96 flex-col rounded-none transition-shadow duration-300 shadow-[#5c9e70] hover:shadow-lg"
    >
      {/* Header / Logo */}
      <CardHeader className="flex items-center justify-center pb-2">
        <div className="relative h-16 w-32">
          <Image
            src={item.images?.[0]}
            alt={`${item.name} logo`}
            fill
            className="object-contain"
          />
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-5">
          {item.review}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto flex items-center justify-between gap-2 border-t pt-4">
        <div className="min-w-0">
          <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
            <p className="truncate font-semibold text-foreground">
              {item.name}
            </p>
          </a>
        </div>

        <div className="flex items-center gap-2">
          {item.websiteLink && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="gap-1 rounded-none hover:bg-[#5c9e70] hover:text-white"
            >
              <a
                href={item.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
                Visit
              </a>
            </Button>
          )}

          {item.facebookLink && (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="gap-1 rounded-none"
            >
              <a
                href={item.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

