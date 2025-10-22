import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Camera, Mail, Phone, MapPin, Calendar, Award, BookOpen } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Profile Settings</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Manage your account information and preferences
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl h-fit">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 md:w-32 md:h-32">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl md:text-4xl font-bold">
                      SJ
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Camera className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                <h2 className="text-lg md:text-xl font-bold mb-1">Sarah Johnson</h2>
                <p className="text-xs md:text-sm text-muted-foreground mb-4">Student · UX Design</p>

                <div className="w-full space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">sarah.j@example.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Joined Jan 2024</span>
                  </div>
                </div>

                <div className="w-full pt-4 border-t border-border space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-sm md:text-base">Courses</span>
                    </div>
                    <span className="text-base md:text-lg font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-warning" />
                      <span className="text-sm md:text-base">Achievements</span>
                    </div>
                    <span className="text-base md:text-lg font-bold">24</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-xs md:text-sm">First Name</Label>
                    <Input id="firstName" defaultValue="Sarah" className="text-sm md:text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-xs md:text-sm">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" className="text-sm md:text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs md:text-sm">Email</Label>
                    <Input id="email" type="email" defaultValue="sarah.j@example.com" className="text-sm md:text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs md:text-sm">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="text-sm md:text-base" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="location" className="text-xs md:text-sm">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="location" defaultValue="San Francisco, CA" className="pl-10 text-sm md:text-base" />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio" className="text-xs md:text-sm">Bio</Label>
                    <Textarea 
                      id="bio" 
                      defaultValue="Passionate UX designer learning to create user-centered digital experiences. Love solving complex problems with simple solutions."
                      className="min-h-[100px] text-sm md:text-base"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1" size="sm">Save Changes</Button>
                  <Button variant="outline" className="flex-1" size="sm">Cancel</Button>
                </div>
              </Card>

              <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Skills & Interests</h2>
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs md:text-sm mb-3 block">Current Skills</Label>
                    <div className="flex flex-wrap gap-2">
                      {["UI Design", "UX Research", "Prototyping", "Figma", "User Testing", "Wireframing"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs md:text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs md:text-sm mb-3 block">Learning Goals</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Design Systems", "Accessibility", "Motion Design", "Product Strategy"].map((goal) => (
                        <Badge key={goal} variant="outline" className="text-xs md:text-sm">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Edit Skills
                </Button>
              </Card>

              <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">Email Notifications</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Receive updates about your courses</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">Privacy Settings</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Control who sees your profile</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">Change Password</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Update your account password</p>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-destructive">Delete Account</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Permanently delete your account</p>
                    </div>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
